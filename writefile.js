const fs = require('fs');
const { resolve } = require('path');

const writeFile = (filecont) => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./README.md', filecont, (err) => {
            if (err){
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Success file created!',
            });
        });
    });
};

module.exports = writeFile