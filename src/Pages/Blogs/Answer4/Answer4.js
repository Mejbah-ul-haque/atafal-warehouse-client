import React from 'react';
import { Link } from 'react-router-dom';

const Answer4 = () => {
    return (
        <>
            <div className='py-4 bg-light text-center'>
                <h3 className='fs-5 fw-bold'>What is the purpose of jwt and how does it use?</h3>
                <div style={{ height: '1px' }} className='bg-dark w-50 d-block mx-auto'></div>
                <Link to='/blog'>
                    <button style={{ border: '2px solid #003366', borderRadius: '50px', backgroundColor: '#003366' }} className='text-center fw-bold mt-4 py-2 px-3 text-white btn add-new-item-btn'>Back to Blog page</button>
                </Link>
            </div>
            <div className="container mx-auto mt-4">
                <div className="row">
                    <div className="col-lg-10 d-block mx-auto">
                        <div className="card border-0">
                            <h5 className='text-danger fw-bold'>What is jwt?</h5>
                            <p>
                                JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                            </p>
                            <h5 className='text-danger fw-bold'>Why use JWT?</h5>
                            <p>
                                JWTs are used as a secure way to authenticate users and share information.

                                Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn’t been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT.

                                Not all signing algorithms are created equal though. For example, some signing algorithms use a secret value that is shared between the issuer and the party that verifies the JWT. Other algorithms use a public and private key. The private key is known only to the issuer, while the public key can be widely distributed. The public key can be used to verify the signature, but only the private key can be used to create the signature. This is more secure than a shared secret because the private key only needs to exist in one place.

                                Because of this, the server does not need to keep a database with the information needed to identify the user. For developers, this is great news — the server that issues the JWT and the server that validates it do not have to be the same.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Answer4;