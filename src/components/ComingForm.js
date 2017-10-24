import React, { Component } from 'react';
import { Form, Text, Select } from 'react-form'

class ComingForm extends Component {
  render() {
    return (
        <div>
          <Form
              onSubmit={(values) => {
                console.log('Success!', values)
              }}
              validate={({ name }) => {
                return {
                  name: !name ? 'A name is required' : undefined
                }
              }}
          >
            {({submitForm}) => {
              return (
                  <form onSubmit={submitForm}>
                    <Text field='name' />
                    <Select field='location'
                            options={[{
                              label: 'Bordeaux',
                              values: true
                            }, {
                              label: 'Paris',
                              value: false
                            }]}/>
                    <Select field='activity'
                            options={[{
                              label: 'Resto',
                              values: true
                            }, {
                              label: 'ke',
                              value: false
                            }]}/>
                    <button type='submit'>Submit</button>
                  </form>
              )
            }}
          </Form>
        </div>
    );
  }
}

export default ComingForm;
