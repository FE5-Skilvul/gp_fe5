import React from "react";

export default function CardList({ namaKampus, lokasi, urlImg, key }) {
  return (
      <div className="col-lg-3 mb-4" key={key}>
        <div className="card mx-auto h-100" style={{ width: "18rem" }}>
          <img
            src={urlImg}
            className="card-img-top"
            alt="Universitas Gadjah Mada"
            style={{ width: "auto", height: "250px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{namaKampus}</h5>
            <p className="card-text">{lokasi}</p>
          </div>
          <div className="card-footer">
            <a href="kampus/?id=1" className="btn btn-primary" id="1">
              Kunjungi
            </a>
          </div>
        </div>
      </div>
  );
}
