import Enzyme, {shallow} from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18';
import {DeleteAlert} from "../DeleteAlert";

Enzyme.configure({ adapter: new Adapter() })
describe('deleteAlert component', () => {
    it('should render correct components',  () => {
        const wrapper = shallow(<DeleteAlert />);

        expect(wrapper.find('.deleteAlert').length).toBe(1);
        expect(wrapper.find('.bottom').length).toBe(1);
    });

    it('simulates click cancel events', () => {
        const cancelDeleteItemMock = jest.fn();
        const wrapper = shallow(<DeleteAlert cancelDeleteItem={cancelDeleteItemMock} />);
        const cancelBtn = wrapper.find('button').at(0);

        cancelBtn.simulate('click');
        expect(cancelDeleteItemMock).toHaveBeenCalled();
    });

    it('simulates click confirm events', () => {
        const cancelConfirmItemMock = jest.fn();
        const wrapper = shallow(<DeleteAlert deleteConfirm={cancelConfirmItemMock} />);
        const confirmBtn = wrapper.find('button').at(1);

        confirmBtn.simulate('click');
        expect(cancelConfirmItemMock).toHaveBeenCalled();
    });
})