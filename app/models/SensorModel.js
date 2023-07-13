module.exports = mongoose => {
    var schema = mongoose.Schema({
        sensor_name: String,
        value: String,
        packet_sequence: String
    },{
        timestamps: true
    });

    schema.method("toJSON", function () {
        const {
            __v,
            _id,
            ...object
        } = this.toObject();
        object.id = _id;

        return object;
    });

    const Sensor = mongoose.model("sensor", schema);
    return Sensor;
}