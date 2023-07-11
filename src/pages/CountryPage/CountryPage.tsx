import * as S from './styles';
import { Link, useParams } from 'react-router-dom';
import { SingleCountry } from '../../Components/SingleCountry/SingleCountry';
import { useEffect, useState } from 'react';
import { CountryTypeScript } from '../../types/Country';
import { useApi } from '../../context/ContextApi';
import { useForm } from '../../context/ContextTheme';

export const CountryPage = () => {
  const { state } = useForm();
  const { name } = useParams();
  const countries = useApi();

  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState<CountryTypeScript[]>([]);

  useEffect(() => {
    if (name) {
      getCountry(name);
    }
  }, [name]);  

  const getCountry = async (param: string) => {
    setLoading(true);
    try {
      let country = countries.find((item: CountryTypeScript) => item.name === param);
      setCountry(country ? [country] : []);
    } catch (error) {
      console.error('Error fetching country:', error);
      setCountry([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.CountryPage theme={state.theme}>
      <div className='container'>
        <Link to="/" className='back--button'><i className="fas fa-long-arrow-alt-left"></i> Back</Link>
        {loading &&
          <div className='loading'>Loading...</div>
        }
        {!loading && country.map((item) => (
          <SingleCountry
            key={item.name}
            flag={item.flags.png}
            name={item.name}
            nativeName={item.nativeName}
            topLevelDomain={item.topLevelDomain[0]}
            population={item.population}
            currencies={item.currencies && item.currencies}
            region={item.region}
            languages={item.languages}
            subregion={item.subregion}
            capital={item.capital}
            borders={item.borders}
          />
        ))}
      </div>
    </S.CountryPage>
  );
};
