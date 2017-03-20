import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FieldInput from '../../../src/components/common/FieldInput';



let props = {};

beforeAll(() => {
    props = {
        input: {},
        type: 'text',
        name: 'category',
        label: 'Category',
        placeholder: 'Category',
        meta: { touched: false, error: {}, warning: {} },
        onChange: () => { }
    };

    return props;
});



describe('FieldInput.test.js', () => {
    let wrapper = undefined;

    beforeEach(() => {
        wrapper = shallow(<FieldInput {...props} />);        
        return wrapper;
    });


    it('renders without crashing', () => {
        expect(wrapper.length).toEqual(1);
    });


    it('renders as expected', () => {
        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    });


});


