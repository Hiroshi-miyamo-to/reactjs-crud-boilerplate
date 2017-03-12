import { expect } from 'chai';
import * as AuthorActions from '../../src/action/AuthorAction';
import * as ActionType from '../../src/action/ActionType';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';



describe('AuthorAction.test.js', () => {

    describe('getAuthorsResponseActionCreator', () => {
        it(`should create action ${ActionType.GET_AUTHORS_RESPONSE}`, () => {
            const authors = { id: 'scott-allen', firstName: 'Scott', lastName: 'Allen' };
            const expectedAction = {
                type: ActionType.GET_AUTHORS_RESPONSE,
                authors: authors
            };

            const actualAction = AuthorActions.getAuthorsResponse(authors);

            expect(actualAction).to.deep.equal(expectedAction);
        });
    });


    const thunkMiddleware = [thunk];
    const mockStore = configureMockStore(thunkMiddleware);


    describe('getCoursesActionThunk', () => {
        afterEach(() => {
            nock.cleanAll();
        });

        it('should get authors', (done) => {
            const expectedActions = [
                { type: ActionType.API_CALL_BEGIN },
                {
                    type: ActionType.GET_AUTHORS_RESPONSE,
                    body: {
                        authors: [
                            { id: 1, firstName: 'Allen', lastName: 'Holub' }
                        ]
                    }
                }
            ];

            const store = mockStore({ authors: [] }, expectedActions, done);
            store.dispatch(AuthorActions.getAuthorsAction())
                .then(() => {
                    const actions = store.getActions();

                    expect(actions[0].type).to.equal(ActionType.API_CALL_BEGIN);
                    expect(actions[1].type).to.equal(ActionType.GET_AUTHORS_RESPONSE);
                    done();
                });
        });

    });




});