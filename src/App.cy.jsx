import App from './App'

describe('<DynamicForm />', () => {

    it('renders', () => {

        cy.intercept("/src/assets/initialValue-example-sample.json", {
            "name": "a test",
            "type": "a test"
        })

        // see: https://on.cypress.io/mounting-react
        cy.mount(<App />)
    })

})