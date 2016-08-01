import React, {PropTypes} from 'react'
import CardComponent from './CardComponent'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import injectTapEventPlugin from 'react-tap-event-plugin';


const StudyComponent = React.createClass({
  createNewCard() {
    console.log('good!')
  },

  render() {
    return (
      <div>
        <CardComponent />
        <FloatingActionButton onClick={this.props.createNewCard}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
})

StudyComponent.propTypes = {
  createNewCard: PropTypes.func.isRequired
}

export default StudyComponent
