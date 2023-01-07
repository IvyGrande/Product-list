import Enzyme, {mount, shallow} from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18';
import App from "./App";


// Enzyme.configure({adapter: new Adapter()})
// describe('Show Home-page', () => {
//   it('should render correct components', () => {
//     const screen = shallow(<App />)
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
//   });
// })
