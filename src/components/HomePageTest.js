import Enzyme, {mount, shallow} from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18';
import {HomePage} from "./HomePage";


Enzyme.configure({adapter: new Adapter()})
describe('Show Home-page', () => {
    it('should render correct components', () => {
        const wrapper = shallow(<HomePage/>);

        expect(wrapper.find('div')).toExist();
    });
})
