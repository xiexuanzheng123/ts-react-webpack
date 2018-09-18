import * as React from 'react';
import * as ReactDom from 'react-dom';
import Hello from './component/RT/Hello';

ReactDom.render(
    <Hello name="TypeScript" enthusiasmLevel={2} />,
    document.getElementById('app') as HTMLElement  // 类型断言
);
