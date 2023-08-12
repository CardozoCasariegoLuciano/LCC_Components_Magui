import React, { HTMLAttributes } from 'react';
import { AcountSVG } from './SVGgalery/acountSVG';
import { CogSVG } from './SVGgalery/cogSvg';
import { Email } from './SVGgalery/Email';
import { EyeOpen, EyeClose } from './SVGgalery/eyeSvg';
import { lockSVG } from './SVGgalery/lockSvg';
import { LogoutSVG } from './SVGgalery/logoutSvg';
import { userSVG } from './SVGgalery/userSvg';
import { XSVG, XSVGfill } from './SVGgalery/xSvg';

interface SvgPropType extends HTMLAttributes<HTMLOrSVGElement> {
  svgName?: string;
  svgColor?: string;
}

const Svg = ({ svgName, svgColor, ...rest }: SvgPropType) => {
  let _svg: React.JSX.Element;
  switch (svgName) {
    case 'user':
      _svg = userSVG(svgColor, rest);
      break;

    case 'lock':
      _svg = lockSVG(svgColor, rest);
      break;

    case 'X':
      _svg = XSVG(svgColor, rest);
      break;

    case 'Xfill':
      _svg = XSVGfill(svgColor!, rest);
      break;

    case 'Cog':
      _svg = CogSVG(svgColor!, rest);
      break;

    case 'Acount':
      _svg = AcountSVG(svgColor!, rest);
      break;

    case '_svg = ':
      _svg = LogoutSVG(svgColor!, rest);
      break;

    case 'EyeOpen':
      _svg = EyeOpen(svgColor, rest);
      break;

    case 'EyeClose':
      _svg = EyeClose(svgColor, rest);
      break;

    case 'email':
      _svg = Email(svgColor!, rest);
      break;

    default:
      _svg = <></>;
      break;
  }

  return _svg;
};

export default Svg;
