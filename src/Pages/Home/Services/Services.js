import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services]= useServices();
    return (
        <div id="services" className='services'>
            <h2 className='mb-4 text-primary'>Services :{services.length}</h2>
            <div className='service-conteiner'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;