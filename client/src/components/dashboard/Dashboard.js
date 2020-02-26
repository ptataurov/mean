import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile'
import PropTypes from 'prop-types'

const Dashboard = ({ getCurrentProfile, auth, profile }) => {
  useEffect(() => {
    getCurrentProfile()
  }, [])

  return <div>Dashboard</div>
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = ({ auth, profile }) => ({
  auth,
  profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)