import React, {useState} from "react";
import NewCityModal from "../../components/Modals/NewCityModal";
import {Formik, Field} from "formik";
import {ErrorLabel, Header3, StyledDiv2Right1200, StyledForm} from "../../components/StyledComponents";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import FormikTextInputForm from "../../components/CommonForms/FormikTextInputForm";
import FormikSelectInputForm from "../../components/CommonForms/FormikSelectInputForm";
import {AthletesValidationSchema} from "./AthletesValidationSchema";
import {DatePickerField} from "../../components/CommonForms/FormikDatePicker";

const AthletesForm = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [currentCountry, setCurrentCountry] = useState("")
    const [cities, setCities] = useState(props.cities)

    return (
        <React.Fragment>
            {/*to prevent premature component did mount in NewCityModal*/}
            {showModal ? <NewCityModal
                show={showModal}
                onHide={() => {
                    setShowModal(false)
                    setCities(props.cities)
                }}
                country={currentCountry}
                countries={props.countries}
                cities={cities}
                afterAdding={() => {
                    setCurrentCountry("")
                    props.updateCities()   //TODO change it, so the citiesForForm would be updated
                }}
            /> : null}

            <Formik
                isInitialValid={false}
                initialValues={{
                    active: props.initialActive,
                    birthdate: '',
                    cityId: props.initialCityId,
                    clubId: props.initialClubId,
                    countryId: props.initialCountryId,
                    fisCode: props.initialFisCode,
                    genderId: '',
                    firstName: props.initialFirstName,
                    lastName: props.initialLastName,
                    skisId: props.initialSkisId,
                }}
                validationSchema={AthletesValidationSchema}
                onSubmit={(values) => {
                    props.onSubmit(values)
                }}
            >{({
                   handleSubmit,
                   setFieldValue
               }) => (
                <StyledForm
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }}
                >
                    <Card style={{borderRadius: '10px', marginBottom: '30px'}}>
                        <Card.Header>
                            <Header3>{props.mainHeader}</Header3>
                            <small>Fields with (*) are mandatory</small>
                        </Card.Header>
                        <Card.Body>
                            <FormikTextInputForm
                                name="firstName"
                                label="First name*:"
                            />

                            <FormikTextInputForm
                                name="lastName"
                                label="Last name*:"
                            />

                            <FormikSelectInputForm
                                key={props.genders}
                                name="genderId"
                                label="Gender*:"
                            >
                                <option value={""} disabled>Choose...</option>
                                {props.genders.map(gender => (
                                    <option key={gender.id} value={gender.id}>{gender.gender}</option>
                                ))}
                            </FormikSelectInputForm>

                            <DatePickerField
                                name="birthdate"
                                label={"Birthdate*:"}
                            />

                            <FormikSelectInputForm
                                key={props.countries}
                                name="countryId"
                                label="Country*:"
                                onChange={e => {
                                    props.filterByCountry(e)
                                    setFieldValue("countryId",e.target.value)
                                    setCurrentCountry(e.target.value)
                                }}
                            >
                                <option value={""} disabled>Choose...</option>
                                {props.countries.map(country => (
                                    <option key={country.id} value={country.id}>{country.name}</option>
                                ))}
                            </FormikSelectInputForm>


                            <FormikSelectInputForm
                                key={props.cities}
                                name="cityId"
                                label="City*:"
                                disabled={props.cities.length < 1}
                                hintTextDown={
                                    <a href="javascript:void(0)" onClick={() => {
                                        setShowModal(true)
                                    }
                                    }>Create new city</a>
                                }
                            >
                                <option value={""} disabled>Choose...</option>
                                {props.cities.map(city => (
                                    <option key={city.id} value={city.id}>{city.name}</option>
                                ))}
                            </FormikSelectInputForm>

                            <FormikSelectInputForm
                                key={props.clubs}
                                name="clubId"
                                label="Club*:"
                                disabled={props.clubs.length < 1}
                            >
                                <option value={""} disabled>Choose...</option>
                                {props.clubs.map(club => (
                                    <option key={club.id} value={club.id}>{club.name}</option>
                                ))}
                            </FormikSelectInputForm>

                            <FormikSelectInputForm
                                key={props.skis}
                                name="skisId"
                                label="Skis*:"
                            >
                                <option value={""} disabled>Choose...</option>
                                {props.skis.map(skis => (
                                    <option key={skis.id} value={skis.id}>{skis.brand}</option>
                                ))}
                            </FormikSelectInputForm>


                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Active*:</Form.Label>
                                <Col sm={10}>
                                    <Field style={{marginTop:"15px"}}type="checkbox" name="active"  />
                                </Col>
                            </Form.Group>

                            <FormikTextInputForm
                                name="fisCode"
                                label="FIS code*:"
                                />

                            <StyledDiv2Right1200>
                                <Button type={"submit"}>Submit</Button>
                            </StyledDiv2Right1200>
                        </Card.Body>
                    </Card>

                </StyledForm>
            )}
            </Formik>
        </React.Fragment>
    )
}

export default AthletesForm