const dbTest = (err) => {
    if(err) {console.log(err)} 
    else {console.log('Database connected successfully')}
    }

const serverTest = () => {console.log('Server is running')}

module.exports = {dbTest, serverTest}