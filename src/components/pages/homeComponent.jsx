
import image1 from './img/1.png';
import image2 from './img/2.jpg';
import image3 from './img/3.png';
import image4 from './img/4.jpg';
import card1 from './img/card1.jpeg';
import card2 from './img/card2.jpeg';
import card3 from './img/card3.jpeg';
import card4 from './img/card4.jpeg';

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Button } from 'antd';
import { Carousel } from "antd"
import './style/homestyle.css'
import { useLocation } from 'react-router';

const { Meta } = Card;

function HomeComponent() {
    const location = useLocation();
    const loginTokenRef = location.state

    const contentStyle = {
        margin: '0 auto',
        height: '350px',
        width: '200px', 
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        backgroundSize: 'cover'
    };

    return (
        <>
            <div className="globalCarousel">
            <h3 className="h3carou">Les prochains evenements</h3>
                <Carousel>
                    <div>
                        <img style={contentStyle} src={image1} alt="content carousel"/>
                    </div>
                    <div>
                        <img style={contentStyle} src={image2} alt="content carousel"/>
                    </div>
                    <div>
                        <img style={contentStyle} src={image3} alt="content carousel"/>
                    </div>
                    <div>
                        <img style={contentStyle} src={image4} alt="content carousel"/>
                    </div>
                </Carousel>               
            </div>

            <div className="globalCard">
                <div className="lignDivOne">
                    <Card style={{ width: 300, margin: '16px' }}
                        cover={<img alt="example" src={card1} />}
                        actions={[
                            <Button type="dashed">Vie associative</Button>,
                            <Button type="dashed">Vie de l'école</Button>, 
                        ]}
                    >
                        <Meta
                        title="Le Marketing Digital: pollution et solutions !"
                        description="Aujourd'hui, la mercatique en ligne est un des element clé de la ..."
                        />
                    </Card>

                    <Card style={{ width: 300, margin: '16px' }}
                        cover={<img alt="example" src={card2} />}
                        actions={[
                            <Button type="dashed">Vie associative</Button>,
                            <Button type="dashed">Vie de l'école</Button>, 
                        ]}
                    >
                        <Meta
                        title="Résultats de la campagne BDE 2024 ! "
                        description="Après une semaine de campagne intensive, la liste Dreal à Paris ..."
                        />
                    </Card>
                </div>

                <div className="lignDivTwo">
                    <Card style={{ width: 300, margin: '16px' }}
                        cover={<img alt="example" src={card3}/>}
                        actions={[
                            <Button type="dashed">Vie de l'école</Button>, 
                        ]}
                    >
                        <Meta
                        title="Le Printemps des Entrepreneurs l'appel à projets est lancé !"
                        description="L'incubateur Efrei Entrepreneurs ouvre son appel à projets ..."
                        />
                    </Card>

                    <Card style={{ width: 300, margin: '16px' }}
                        cover={<img alt="example" src={card4} />}
                        actions={[
                            <Button type="dashed">Vie de l'école</Button>,
                        ]}
                    >
                        <Meta
                        title="Pause réseau - Avril 2024"
                        description="En mars, le groupe Pomona, leader de la distribution livrée de produits ..."
                        />
                    </Card>
                </div>
            </div>
        </>
    )
}

export default HomeComponent;