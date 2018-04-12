module.exports = {
    // Database connection information
<<<<<<< HEAD
  'database_mlab': 'mongodb://bcit:bcit123@ds235708.mlab.com:35708/armaanbcit',
  'database_local': 'boats',
=======
    'database': 'mongodb://bcit:bcit123@ds235708.mlab.com:35708/armaanbcit',
>>>>>>> 9748d46c23ebe57eca8757e3b125785bf87ef5c3

  // Setting port for server
  'port': process.env.PORT || 3000, 

    // Setting mongo host name
    'mongo_host': process.env.MONGO_HOST || 'localhost',

    // Setting mongo port number
    'mongo_port': process.env.MONGO_PORT || 27017,

    // Setting mongo database name
    'mongo_database': process.env.MONGO_DATABASE_NAME || 'boats',

    'secret': 'super secret passphrase',
};