import React from 'react';
import { Link } from 'react-router-dom';



const ProfileActions = () => {
   
    
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
      </Link>
      <Link to="/add-experience" className="btn btn-light">
        <i className="fab fa-black-tie text-info mr-1" />
        Add Experience
      </Link>
      <Link to="/add-education"  className="btn btn-light">
        <i className="fas fa-graduation-cap text-info mr-1"  />
        Add Education
      </Link>
      <Link to=""  id="me" className="btn btn-light  text-muted">
        <i className="fas fa-star text-info mr-1"  />
         XREP Score: <b>2.5</b> <i className="fas fa-star text-info mr-1"  />
            <i className="fas fa-star text-info mr-1"  />
            <i className="fas fa-star-half text-info mr-1"></i>
            
      </Link>
    </div>
  );
};

export default ProfileActions;