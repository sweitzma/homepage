import React from "react";
import { 
  Link,
  useLocation,
  useRouteMatch
} from "react-router-dom";

const RoutedTabs = (props) => {
  const { path, url } = useRouteMatch();
  const location = useLocation();
  
  const tabs = props.tabs.map((t) => {
    const commonStyle = "pt-1 px-16 mx-1 border-b-0 rounded-t-sm font-mono hover:underline"
    const selectedStyle = commonStyle + " " + "shadow-2xl pb-2 border-b-4 border-green-400 bg-gray-100"
    const unselectedStyle = commonStyle + " " + "border-gray-300 bg-gray-200"
    const select = path + t.route === location.pathname;

    return (
      <li 
        className={ select ? selectedStyle : unselectedStyle }
        key={ t.name }
      >
        <Link to={ path + t.route }>{ t.name }</Link>
      </li>
    );
  });

  // tabs : [ { name: str, route: str } ]
  // TODO: proptypes for this
  return (
    <div className="pt-5 w-8/12 mx-auto">
      <ul className='flex justify-center border-b-2 border-grey-300'>
        { tabs }
      </ul>
    </div>
  );
};

export default RoutedTabs;
