import {useEffect} from 'react';
import { withTranslation } from '../i18n';

const Error = () => {
    useEffect(() => {
        window.location.replace("/");
        // eslint-disable-next-line
    }, []);
    return (
        null
    )
}

Error.with18nextTranslation = async () => ({
    namespacesRequired: ['inicio'],
  });
   
export default withTranslation('inicio')(Error);