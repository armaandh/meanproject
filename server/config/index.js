module.exports = {  
    // Database connection information
    'database': 'mongodb://bcit:bcit123@ds235708.mlab.com:35708/armaanbcit',

    // Setting port for server
    'port': process.env.PORT || 3000,

    // Secret key for JWT signing and encryption
    'secret': 'super secret passphrase'
};