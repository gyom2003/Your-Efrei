import 'dayjs/locale/fr';
import locale from 'antd/lib/locale/fr_FR';
import { ConfigProvider } from 'antd';

const ConfigLocation = ({ children }) => {
    <ConfigProvider locale={locale}>
        {children}
    </ConfigProvider>
}

export default ConfigLocation;