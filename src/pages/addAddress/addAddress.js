import React, { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as components from "../../components/index.js";

import { useDispatch, useSelector } from "react-redux";
import { getProvinsi, getKabupaten, getKecamatan, getKelurahan } from "../../features/addressLocation/action.js";

export const AddAddress = () => {
  let { apiProvinsi, apiKabupaten, apiKecamatan, apiKelurahan } = useSelector((state) => state.wilayah);
  let dispatch = useDispatch();

  let handleProvId = (q) => {
    dispatch(getKabupaten(q.target.value));
  };
  let handleKabId = (q) => {
    dispatch(getKecamatan(q.target.value));
  };

  let handleKecId = (q) => {
    dispatch(getKelurahan(q.target.value));
  };

  useEffect(() => {
    dispatch(getProvinsi());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <Form>
          <Row>
            <Col sm={12} md={6}>
              <div>
                <components.Input text="Nama" type="text" />

                <components.Gap sty="10px" />
              </div>
              <components.TextArea textArea="Detail alamat" />
            </Col>
            <Col>
              <div>
                <label>Provinsi: </label>
                <Form.Select aria-label="Default select example" onChange={handleProvId} className="">
                  <option>Open this select menu</option>
                  {apiProvinsi &&
                    apiProvinsi.map((index, i) => (
                      <option key={i} value={index.id}>
                        {index.name}
                      </option>
                    ))}
                </Form.Select>
                <components.Gap sty="10px" />
                <label>Kabupaten: </label>
                <Form.Select aria-label="Default select example" onChange={handleKabId}>
                  <option>Open this select menu</option>
                  {apiKabupaten &&
                    apiKabupaten.map((index, i) => (
                      <option key={i} value={index.id}>
                        {index.name}
                      </option>
                    ))}
                </Form.Select>
                <components.Gap sty="10px" />
                <label>Kecamatan: </label>
                <Form.Select aria-label="Default select example" onChange={handleKecId}>
                  <option>Open this select menu</option>
                  {apiKecamatan &&
                    apiKecamatan.map((index, i) => (
                      <option key={i} value={index.id}>
                        {index.name}
                      </option>
                    ))}
                </Form.Select>
                <components.Gap sty="10px" />
                <label>Kelurahan: </label>
                <Form.Select aria-label="Default select example ">
                  <option>Open this select menu</option>
                  {apiKelurahan && apiKelurahan.map((index, i) => <option key={i}>{index.name}</option>)}
                </Form.Select>
                <components.Gap sty="10px" />
                <Button style={{ width: "95%" }} variant="primary" type="submit">
                  Simpan
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
      <components.Gap sty="10px" />
    </div>
  );
};
