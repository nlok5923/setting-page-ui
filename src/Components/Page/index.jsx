import React from "react"
import "./Page.scss"

const Page = () => {
    return(
        <>
        <div className="expanded">
            <div className="expanded-head">
                Profile
            </div>
            <div className="expanded-profile">
                <p>Profile Image </p>
                <div className="expanded-profile-update">
                    <img src="images/lady.png" alt="logo" />
                    <button> Profile Image </button>
                    <p> Remove </p>
                </div>
                <div className="expanded-profile-form">
                    <div className="expanded-profile-form-field">
                        <label for="name"> Full name </label> <br />
                        <input type="text" name="full_name" value="Ravi" />
                    </div>
                    <div className="expanded-profile-form-field">
                        <label for="name"> Email address </label> <br />
                        <input type="text" name="full_name" value="ravi@youremail.com" />
                    </div>
                </div>
                <button className="save-button"> Save </button>
            </div>
        </div>
        </>
    )
}

export default Page;