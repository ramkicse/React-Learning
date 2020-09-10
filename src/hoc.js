import React from 'react'

export const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>Info is : {props.info}</p>
    </div>
)


export const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        
        <div>
            {props.isAdmin && <p>This is private, please dont share </p>}
            <WrappedComponent {...props} />
        </div>
    )
}

export const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props} />) : <p>Please login to viw</p>}
       
    </div>
    )
}

export const AdminInfo = withAdminWarning(Info)
export const AuthenticationInfo = requireAuthentication(Info)