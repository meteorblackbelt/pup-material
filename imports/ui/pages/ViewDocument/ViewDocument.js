import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'rmwc/Button';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Documents from '../../../api/Documents/Documents';
import NotFound from '../NotFound/NotFound';
import Loading from '../../components/Loading/Loading';

const handleRemove = (documentId, history) => {
  if (confirm('Are you sure? This is permanent!')) {
    Meteor.call('documents.remove', documentId, (error) => {
      if (error) {
        this.props.onAlert(error.reason, 'danger');
      } else {
        this.props.onAlert('Document deleted!', 'success');
        history.push('/documents');
      }
    });
  }
};

const renderDocument = (doc, match, history) => (doc ? (
  <div className="ViewDocument">
    <div className="page-header clearfix">
      <h4 className="pull-left">{ doc && doc.title }</h4>
      <Button raised theme="secondary-bg text-secondary-on-background" onClick={() => history.push(`${match.url}/edit`)}>Edit</Button>
      <Button raised theme="secondary-bg text-secondary-on-background" onClick={() => handleRemove(doc._id, history)} className="text-danger">
        Delete
      </Button>
    </div>
    { doc && doc.body }
  </div>
) : <NotFound />);

const ViewDocument = ({
  loading, doc, match, history,
}) => (
  !loading ? renderDocument(doc, match, history) : <Loading />
);

ViewDocument.defaultProps = {
  doc: null,
};

ViewDocument.propTypes = {
  loading: PropTypes.bool.isRequired,
  doc: PropTypes.object,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withTracker(({ match }) => {
  const documentId = match.params._id;
  const subscription = Meteor.subscribe('documents.view', documentId);

  return {
    loading: !subscription.ready(),
    doc: Documents.findOne(documentId),
  };
})(ViewDocument);
