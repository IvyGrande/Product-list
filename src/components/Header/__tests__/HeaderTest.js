import Enzyme, {shallow} from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18';
import {Header} from "../Header";

Enzyme.configure({adapter: new Adapter()})
describe('Show Product-page', () => {
    it('should render correct components', () => {
        const wrapper = shallow(<Header/>);

        expect(wrapper.find('.header').length).toBe(1);
    });


})