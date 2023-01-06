import Enzyme, {shallow} from 'enzyme'
import sinon from 'sinon';
import Adapter from '@cfaester/enzyme-adapter-react-18';

import {DeleteAlert} from "../DeleteAlert";

Enzyme.configure({ adapter: new Adapter() })
describe('deleteAlert component', () => {
    it('should render correct components',  () => {
        const wrapper = shallow(<DeleteAlert />);

        expect(wrapper.find('.deleteAlert').length).toBe(1);
        expect(wrapper.find('.bottom').length).toBe(1);
    });

    it('simulates click events', () => {
        const cancelDeleteItemMock = jest.fn();
        const wrapper = shallow(<DeleteAlert cancelDeleteItem={cancelDeleteItemMock} />);
        const cancelBtn = wrapper.find('button').at(0);

        cancelBtn.simulate('click');
        expect(cancelDeleteItemMock).toHaveBeenCalled();
    });
})