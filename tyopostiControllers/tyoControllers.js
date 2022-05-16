const createJobs = async (req, res) => {
    res.send('Job Created');
};
const updateJobs = async (req, res) => {
    res.send('Jobs has been updated');
};
const deleteJob = async (req, res) => {
    res.send('Jobs deleted');
};

const getAllJobs = async (req, res) => {
    res.send('Get all jobs items');
};

const displayStatictics = async (req, res) => {
    res.send('Get all jobs items');
};

export { createJobs, updateJobs, deleteJob, displayStatictics, getAllJobs };
