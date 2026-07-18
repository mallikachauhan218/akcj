import Image from "next/image";
import React from "react";
import { Modal } from "react-bootstrap";

function Teammodal({ modalContent, show, onHide ,src }) {
    const base_url = process.env.NEXT_PUBLIC_DB_IMG
    console.log(modalContent , 'modalContent');
    
  return (
    <Modal show={show} onHide={onHide} size="lg">
      {/* <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header> */}
      <Modal.Body className="p-[30px!important] position relative">
        <div className="absolute top-0 left-0 z-0">
          <Image
            src={"/images/team_bg1.png"}
            width={300}
            height={300}
            className=""
            alt="close"
          />
        </div>
        <div className="absolute bottom-0 right-0 z-0">
          <Image
            src={"/images/team_bg2.png"}
            width={100}
            height={100}
            className=""
            alt="close"
          />
        </div>
        <button
          type="button"
          className="absolute top-3 right-3"
          onClick={onHide}
        >
          <Image
            src={"/images/modal_close.svg"}
            width={32}
            height={32}
            className="img-fluid "
            alt="close"
          />
        </button>

        <div className="row flex items-center pb-[20px]">
          <div className="col-6 z-1">
            <Image
              src={modalContent?.photo}
              className=""
              width={700}
              height={300}
              alt="team"
            />
          </div>
          <div className="col-6 z-1 mt-4">
            <Image
              src={modalContent?.image}
              className="img-fluid mb-[24px]"
              width={500}
              height={300}
              alt="team"
            />
            <div className="f56 text_main fw_700 mb-[8px]">Hello</div>
            <div className="f36 text_red fw_700 mb-[20px]">
              I'm {modalContent?.name}
            </div>
            <div className="italic text-justify f24">
              &quot;{modalContent?.thoughts}&quot;
            </div>
          </div>
        </div>
        <hr />

        <div className="row  pt-[20px]">
          <div className="col-6 z-1">
            <div className="f24 fw_600  mb-[8px]">About</div>
            <div className="f14  text_body">{modalContent?.description}</div>
          </div>
          <div className="col-6 z-1">
            <div className="f24 fw_600  mb-[8px]">Personal Interests</div>
            <div className="f14  text_body">{modalContent?.interests}</div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Teammodal;
