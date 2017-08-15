import { createTest, editTest, getTest, getTests, deleteTest } from '../controllers/testsController';

export default function init(app){
    app.route('/tests')
        .get(getTests)
        .post(createTest);
    
    app.route('/tests/:id')
        .get(getTest)
        .put(editTest)
        .delete(deleteTest);
}
