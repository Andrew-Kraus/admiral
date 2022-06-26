import React from 'react'
import { Button, Modal, Table } from 'react-bootstrap'

const CatalogModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='catalog-modal__container'>
                    <div className='catalog-modal__image-container'>
                        <img className='catalog-modal__image' src={props.src} alt='' />
                        <p className='catalog-modal__title'>Процесс оформления заказа:</p>
                        <p className='modal-text'>
                            1. Позвонить по номеру <span className='modal-phone'>8 (963) 319-90-002</span>.
                        </p>
                        <p className='modal-text'>
                            2. Выявление потребности, уточнить все параметры товара.
                        </p>
                        <p className='modal-text'>
                            3. Выявление дополнительных подробностей.
                        </p>
                        <p className='modal-text'>
                            4. Обсуждение условий и оформление заказа.
                        </p>
                        <p className='modal-text'>
                            5. Самовывоз/доставка товара.
                        </p>
                    </div>
                    <div className='catalog-modal__info'>
                        <p className='catalog-modal__price'>Стоимость: <span className='catalog-modal__price-count'>{props.price}</span></p>
                        <div className='catalog-modal__size'>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Размер</th>
                                        <th>Рост</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>44-46</td>
                                        <td>170-176</td>
                                    </tr>
                                    <tr>
                                        <td>46-48</td>
                                        <td>182-188</td>
                                    </tr>
                                    <tr>
                                        <td>48-50</td>
                                        <td>170-176</td>
                                    </tr>
                                    <tr>
                                        <td>50-52</td>
                                        <td>182-188</td>
                                    </tr>
                                    <tr>
                                        <td>52-54</td>
                                        <td>170-176</td>
                                    </tr>
                                    <tr>
                                        <td>54-56</td>
                                        <td>182-188</td>
                                    </tr>
                                    <tr>
                                        <td>56-58</td>
                                        <td>170-176</td>
                                    </tr>
                                    <tr>
                                        <td>58-60</td>
                                        <td>182-188</td>
                                    </tr>
                                    <tr>
                                        <td>60-62</td>
                                        <td>170-176</td>
                                    </tr>
                                    <tr>
                                        <td>62-64</td>
                                        <td>182-188</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <p className='catalog-modal__cloth'>Ткань: <span>{props.cloth}</span></p>
                        <p className='catalog-modal__cloth'>Состав: <span>{props.comp}</span></p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CatalogModal