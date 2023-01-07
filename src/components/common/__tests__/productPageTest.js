import Enzyme, {shallow} from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18';
import {ProductPage} from "../../ProductContainer/ProductPage";
import {DeleteAlert} from "../DeleteAlert";


Enzyme.configure({adapter: new Adapter()})
describe('Show Product-page', () => {
    it('should render correct components', () => {
        const wrapper = shallow(<ProductPage/>);

        expect(wrapper.find('.body').length).toBe(1);
    });
    // it('show add page when click addBtn', () => {
    //     const showAppPageMock = jest.fn();
    //     const wrapper = shallow(<ProductPage addPage={showAppPageMock} />);
    //     const cancelBtn = wrapper.find('.body.add');
    //
    //     cancelBtn.simulate('click');
    //     expect(showAppPageMock).toHaveBeenCalled();
    // });

})