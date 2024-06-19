const {
    Pool
} = require('pg');

const pool = new Pool({
    host: process.env["HOST_DB"],
    user: process.env["USER_DB"],
    password: process.env["PASS_DB"],
    database: process.env["NAME_DB"],
    port: process.env["PORT_DB"],
    ssl: true
});

module.exports = async function (context, eventHubMessages) {
    const client = await pool.connect();
    try {
        const deviceId = eventHubMessages.device_id;
        const data = JSON.stringify(eventHubMessages.data);

        const query = 'INSERT INTO iotdata(device_id, data) VALUES($1, $2)';
        const values = [deviceId, data];

        await client.query(query, values);

        context.log('Insert completed successfully!');
    } catch (error) {
        context.log('Error:', error);
    } finally {
        client.release();
    }
};