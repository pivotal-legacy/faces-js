import React, {PropTypes} from 'react'
import SessionRepo from './SessionRepo'

const LoginPage = React.createClass({
  onSubmit(event) {
    event.preventDefault()
    this.props.repo.create(this.refs.email.value, this.refs.password.value)
  },

  render() {
    return (
      <div style={{margin: '20px auto', width: '900px'}}>
        <form className="pure-form pure-form-stacked" onSubmit={this.onSubmit}>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input ref="email" id="email" type="email" placeholder="Email" />

            <label htmlFor="password">Password</label>
            <input ref="password" id="password" type="password" placeholder="Password" />

            <button type="submit" className="pure-button pure-button-primary">Sign in</button>
          </fieldset>
        </form>
      </div>
    )
  }
})

LoginPage.propTypes = {
  repo: PropTypes.object.isRequired
}

LoginPage.defaultProps = {
  repo: new SessionRepo()
}

export default LoginPage
