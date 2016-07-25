import React, {PropTypes} from 'react'

const LoginPage = React.createClass({
  render() {
    return (
      <div style={{margin: '20px auto', width: '900px'}}>
        <form className="pure-form pure-form-stacked" onSubmit={this.props.onSubmit}>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Email" />

            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Password" />

            <button type="submit" className="pure-button pure-button-primary">Sign in</button>
          </fieldset>
        </form>
      </div>
    )
  }
})

LoginPage.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default LoginPage
