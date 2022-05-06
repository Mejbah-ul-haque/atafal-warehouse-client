import React from 'react';
import { Link } from 'react-router-dom';

const Answer3 = () => {
    return (
        <>
            <div className='py-4 bg-light text-center'>
                <h3 className='fs-5 fw-bold'>What is the different between SQL and noSQL?</h3>
                <div style={{ height: '1px' }} className='bg-dark w-50 d-block mx-auto'></div>
                <Link to='/blog'>
                    <button style={{ border: '2px solid #003366', borderRadius: '50px', backgroundColor: '#003366' }} className='text-center fw-bold mt-4 py-2 px-3 text-white btn add-new-item-btn'>Back to Blog page</button>
                </Link>
            </div>
            <div className="container mx-auto mt-3">
                <div className="row">
                    <div className="col-lg-10 d-block mx-auto">
                        <div className="card border-0">
                            <table className="table p-4">
                                <thead className='table-info text-center'>
                                    <tr >

                                        <th className='w-25' scope="col">compare</th>
                                        <th className='w-25' scope="col">SQL</th>
                                        <th className='w-25' scope="col">NoSQL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='text-center'>

                                        <td>Definition</td>
                                        <td>	SQL databases are primarily called RDBMS or Relational Databases</td>
                                        <td>NoSQL databases are primarily called as Non-relational or distributed database</td>
                                    </tr>
                                    <tr className='table-success text-center'>

                                        <td>Design for</td>
                                        <td>Traditional RDBMS uses SQL syntax and queries to analyze and get the data for further insights. They are used for OLAP systems.</td>
                                        <td>NoSQL database system consists of various kind of database technologies. These databases were developed in response to the demands presented for the development of the modern application.</td>
                                    </tr>
                                    <tr className='text-center'>

                                        <td>Query Language</td>
                                        <td>Structured query language (SQL)</td>
                                        <td>	No declarative query language</td>
                                    </tr>
                                    <tr className='table-success text-center'>

                                        <td>Type</td>
                                        <td>SQL databases are table based databases</td>
                                        <td>NoSQL databases can be document based, key-value pairs, graph databases</td>
                                    </tr>
                                    <tr className='text-center'>

                                        <td>Schema</td>
                                        <td>SQL databases have a predefined schema</td>
                                        <td>NoSQL databases use dynamic schema for unstructured data.</td>
                                    </tr>
                                    <tr className='table-success text-center'>

                                        <td>Ability to scale</td>
                                        <td>SQL databases are vertically scalable</td>
                                        <td>NoSQL databases are horizontally scalable</td>
                                    </tr>
                                    <tr className='text-center'>

                                        <td>Examples</td>
                                        <td>	Oracle, Postgres, and MS-SQL.</td>
                                        <td>MongoDB, Redis, Neo4j, Cassandra, Hbase.</td>
                                    </tr>
                                    <tr className='table-success text-center'>

                                        <td>Best suited for</td>
                                        <td>An ideal choice for the complex query intensive environment.</td>
                                        <td>It is not good fit complex queries.</td>
                                    </tr>
                                    <tr className='text-center'>

                                        <td>Hierarchical data storage</td>
                                        <td>SQL databases are not suitable for hierarchical data storage.</td>
                                        <td>More suitable for the hierarchical data store as it supports key-value pair method.</td>
                                    </tr>
                                    <tr className='table-success text-center'>
                                        <td>Variations</td>
                                        <td>One type with minor variations.</td>
                                        <td>Many different types which include key-value stores, document databases, and graph databases.</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Development Year</td>
                                        <td>It was developed in the 1970s to deal with issues with flat file storage</td>
                                        <td>Developed in the late 2000s to overcome issues and limitations of SQL databases.</td>
                                    </tr>
                                    <tr className='table-success text-center'>
                                        <td>Open-source</td>
                                        <td>A mix of open-source like Postgres & MySQL, and commercial like Oracle Database.</td>
                                        <td>Open-source</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Consistency</td>
                                        <td>It should be configured for strong consistency.</td>
                                        <td>It depends on DBMS as some offers strong consistency like MongoDB, whereas others offer only offers eventual consistency, like Cassandra.</td>
                                    </tr>
                                    <tr className='table-success text-center'>
                                        <td>Best Used for</td>
                                        <td>RDBMS database is the right option for solving ACID problems.</td>
                                        <td>NoSQL is a best used for solving data availability problems</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Importance</td>
                                        <td>It should be used when data validity is super important</td>
                                        <td>Use when it’s more important to have fast data than correct data</td>
                                    </tr>
                                    <tr className='table-success text-center'>
                                        <td>Best option</td>
                                        <td>When you need to support dynamic queries</td>
                                        <td>Use when you need to scale based on changing requirements</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Hardware</td>
                                        <td>Specialized DB hardware
                                            (Oracle Exadata, etc.)</td>
                                        <td>Commodity drives storage (standard
                                            HDDs, JBOD)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Answer3;