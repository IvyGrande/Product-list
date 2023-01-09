import Enzyme, {mount, shallow} from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18';
import {Modal} from "../Modal";

Enzyme.configure({adapter: new Adapter()})
describe('Modal component', () => {
    it('should render correct components', () => {
        const wrapper = shallow(<Modal/>);

        expect(wrapper.find('.addPage').length).toBe(1);
        expect(wrapper.find('.bottom').length).toBe(1);
    });

    it('simulates click cancel button', () => {
        const cancelClickBtn = jest.fn();
        const wrapper = shallow(<Modal cancel={cancelClickBtn}/>);
        const cancelBtn = wrapper.find('button').at(0);

        cancelBtn.simulate('click');
        expect(cancelClickBtn).toHaveBeenCalled();
    });


    it('Should set url to state when input is changed', () => {
        const container = shallow(<Modal/>);
        const input = container.find('input').at(0);
        input.simulate('change', {target: {value: "url"}});
        expect(container).toMatchSnapshot();
    });
    exports[`Index with enzyme Should set value to state when input is changed 1`] = `
  <input
    onChange={[Function]}
    type="text"
    value="url"
  />
`;

    it('Should set name to state when input is changed', () => {
        const container = shallow(<Modal/>);
        const input = container.find('input').at(0);
        input.simulate('change', {target: {value: "name"}});
        expect(container).toMatchSnapshot();
    });
    exports[`Index with enzyme Should set value to state when input is changed 1`] = `
  <input
    onChange={[Function]}
    type="text"
    value="name"
  />
`;

    it('Should set introduction to state when input is changed', () => {
        const container = shallow(<Modal/>);
        const input = container.find('input').at(0);
        input.simulate('change', {target: {value: "introduction"}});
        expect(container).toMatchSnapshot();
    });
    exports[`Index with enzyme Should set value to state when input is changed 1`] = `
  <input
    onChange={[Function]}
    type="text"
    value="introduction"
  />
`;
})