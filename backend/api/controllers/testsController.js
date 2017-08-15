
export function createTest(req, res){
    res.send('create test');
};

export function editTest(req, res){
    res.send('edit test ' + req.params.id)
};

export function deleteTest(req, res){
    res.send('delete test ' + req.params.id);
};

export function getTest(req, res){
    res.send('get test ' + req.params.id);
};

export function getTests(req, res){
    res.send('get all tests');
};