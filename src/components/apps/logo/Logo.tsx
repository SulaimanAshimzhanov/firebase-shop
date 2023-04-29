

import React from 'react';
import { Link } from 'react-router-dom';
import { Roads } from '../../../service/Path';

const Logo: React.FunctionComponent = () => 
    <h1><Link to={Roads.LayoutPath.main}>Firebase Shop App</Link></h1>

export default Logo;
