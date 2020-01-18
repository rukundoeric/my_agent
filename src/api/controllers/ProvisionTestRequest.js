const models = require("../../sequelize/models");
const { ProvisionTestRequest } = require("../../sequelize/models/provisionaltestrequest");

class ProvisionTestRequestC {


  static async createRequestProvTest(req, res) {
      const { nationalId, examType, testDate,examLanguage,district,testCenter } = req.body;
      // const createdProvReq = await ProvisionTestRequest.create({
      //   nationalId,
      //   examType,
      //   testDate,
      //   examLanguage,
      //   district,
      //   testCenter
      // });
      // const provReq = createdProvReq.dataValues;
      // res.status(201).send({
      //   status: 201,
      //   data: {
      //     Request: {
      //       nationalId: provReq.nationalId,
      //       examType: provReq.examType,
      //       testDate: provReq.testDate,
      //       examLanguage: provReq.examLanguage,
      //       district:provReq.district,
      //       testCenter:provReq.testCenter

      //     },
      //     message:'Request is sent successfully we will contact you later!'
      //   }
      // });
      res.send(
        {
          "data":"National id"+req.params.nationalId
        }
      )
      
    }


 
  }
  module.exports =ProvisionTestRequestC;