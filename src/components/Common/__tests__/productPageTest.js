import Enzyme, {shallow} from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18';
import {ProductPage} from "../../ProductContainer/ProductPage";

Enzyme.configure({adapter: new Adapter()})
describe('Show Product-page', () => {
    it('should render correct components', () => {
        const wrapper = shallow(<ProductPage/>);

        expect(wrapper.find('.body').length).toBe(1);
    });
})