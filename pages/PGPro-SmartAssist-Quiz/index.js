import React from "react"
import Link from "next/link"
import Modal from "react-bootstrap/Modal"
import { connect } from 'react-redux';
import { setProductResult, setAnswersChosen, setSubAnswerChosen } from '../../action/nextPageAction'
import { setNoProductModalFlag } from '../../action/RecommendationAction'

import Button from "../../components/Button"
import Question from "../../components/Question"
import Progress from "../../components/ProgressBar"
import Header from "../../components/Header"
import AnswerSelection from "../../components/AnswerSelections"
import QuestionIcon from "../../components/QuestionIcon"
import NoProductModal from "../../components/NoProductModal"

import QuestionsData from "../../data/Questions.json"
import ProductRecommendationData from "../../data/ProductRecommendation.json"
import ImageReferenceData from "../../data/ImageReference.json"

export class Questions extends React.PureComponent {
  state = {
    currentQuestionIndex: 0,
    buttonIndex: 1,
    answersChosen: [],
    recommendations: [],
    currentselection: "",
    answerChosen: -1,
    SubAnswers: "",
    subAnswerChosen: "",
    SubSubAnswers: "",
    SubSubAnswerChosen: "",
    SubAnswersIndex: -1,
    hasSubQuestion: false,
    hasSubSubQuestion: false,
    sizeDataResult: [],
    descriptionDataResult: [],
    primaryAreasDefaultAnswers: [],
    setImage: [],
    showModal: false,
    ProDisclaimer: [],
    SuperiorityData: [],
    hasToggleQuestion: false,
    toggleQuestion2: "",
    toggleAnswer2: [],
    FriendlyMessage2: "",
    sublevel: "",
    AnswerBType: -1,
    viewMyRecommendationButton: false,
    primaryAreasList: false,
    importantList: false,
    filteredPrimaryAreasList: [],
    inBackTrack: false,
    AnswerQuesLoc: -1
  };

  selectButtonSubAnswer = (a, i, SubAnswer, buttonIndex) => {
    // Condition for checking if my subquestion selection has changed after back track
    if (SubAnswer != this.state.subAnswerChosen) {
      this.setState({
        hasSubSubQuestion: false,
        SubSubAnswers: "",
        inBackTrack: false,
        SubAnswers: a,
        SubAnswersIndex: i,
        subAnswerChosen: SubAnswer,
        currentselection: SubAnswer,
        buttonIndex: 2.3,
      });
    }
    else // handles the first time selection
    {
      this.setState({
        SubAnswers: a,
        SubAnswersIndex: i,
        subAnswerChosen: SubAnswer,
        currentselection: SubAnswer,
        buttonIndex: 2.3
      });
    }
  }
  selectButton = (optionChoosen, index, buttonType, i, id, sublevel) => {
    const { answersChosen, currentQuestionIndex } = this.state;
    this.setState({ currentselection: optionChoosen, answerChosen: i, });
    if (id == "qBusinessType") {
      if (answersChosen.length != 0) {
        if (optionChoosen != answersChosen[0]) {
          console.log("FLUSH")
          let temp = answersChosen
          for (let j = temp.length; j > 1; j--) {
            temp.splice(j - 1, 1)
          }
          //temp.splice(currentQuestionIndex,1)
          console.log("After Back", temp)
          this.setState({
            hasSubQuestion: false, SubAnswers: "", subAnswerChosen: "",
            hasSubSubQuestion: false, SubSubAnswers: "", inBackTrack: false
          })

          // let temp= answersChosen
          // temp.splice(currentQuestionIndex,1)
          // console.log("After Back",temp)
          //this.setState({ answersChosen:  [] })
        }
      }
      this.setState({ sublevel: sublevel, AnswerBType: i })
    }
    if (id == "qTensions") {
      this.setState({ viewMyRecommendationButton: true })
    }

    if (id == 'qLocations') {
      this.setState({ AnswerQuesLoc: i })
    }

    if (buttonType == "singleSelect") {
      let temp = answersChosen;
      if (answersChosen.length < index + 1) {
        this.setState({ answersChosen: [...answersChosen, optionChoosen] });
      } else {
        temp[index] = optionChoosen;
        console.log(temp[index]);
        this.setState({
          [answersChosen[index]]: [...answersChosen, temp[index]]
        });
      }
    } else {
      let temp = answersChosen;

      if (id == "qPrimaryAreas") {
        if (temp[index].includes(optionChoosen)) {
          let _index = temp[index].indexOf(optionChoosen);
          temp[index].splice(_index, 1);
        } else temp[index].push(optionChoosen);

        this.setState({
          [answersChosen[index]]: [...answersChosen, temp[index]],
        });
      } else {
        if (answersChosen.length < index + 1) {
          this.setState({ answersChosen: [...answersChosen, [optionChoosen]] });
        } else {
          if (temp[index].includes(optionChoosen)) {
            let _index = temp[index].indexOf(optionChoosen);
            temp[index].splice(_index, 1);
          } else temp[index].push(optionChoosen);
        }

        this.setState({
          [answersChosen[index]]: [...answersChosen, temp[index]]
        });
      }
    }
    if (id == "qImportant") {
      if (optionChoosen != "") {
        this.setState({ importantList: true })
      } else {
        this.setState({ importantList: false })
      }
    }
  };

  getMessage = (index, currentselection, id) => {
    const { currentQuestionIndex, ToggleQuestions } = this.state;

    let friendlyMessage = QuestionsData.Data.Questions[currentQuestionIndex].FriendlyMessage;

    let answersArray = QuestionsData.Data.Questions[currentQuestionIndex].Answers

    if (QuestionsData.Data.Questions[currentQuestionIndex].FriendlyMessage) {
      let friendlyMessage = QuestionsData.Data.Questions[currentQuestionIndex].FriendlyMessage;

      if (id == 'qLocations') {
        if (currentselection == "Less than 5" || currentselection == "1-4") {
          return friendlyMessage.replace("||", "small size business");
        } else if (currentselection == "5-9" || currentselection == "5-10") {
          return friendlyMessage.replace("||", "medium size business");
        } else {
          return friendlyMessage.replace("||", "large size business");
        }
      } else if (friendlyMessage.indexOf("||")) {
        let value = friendlyMessage.replace("||", currentselection.toLowerCase());
        return value;
      }
    } else {

      //Checks the FriendlyMessage of the We Feel You questions since it's a level deeper in the JSON
      for (var i = 0; i < QuestionsData.Data.Questions[currentQuestionIndex].Answers.length; i++) {
        if (answersArray[i].Answer === currentselection) {
          let friendlyMessage = answersArray[i].FriendlyMessage
          return friendlyMessage;
        }
      }
    }
  };

  businessTypeMapping = (value, x) => {
    switch (value) {
      case "Quick Serve":
        return "Quick-serve Restaurant";
      case "Fast Casual":
        return "Full-service Restaurant";
      case "Midscale/Casual":
        return "Full-service Restaurant";
      case "Fine Dining":
        return "Full-service Restaurant";
      case "Coffee Shop/Cafe/Bar":
        if (value.includes(x)) {
          return x;
        }
        return "Cafe";
      case "Hotel":
        return "Hotel";
      case "Motel":
        return "Motel";
      case "Bed & Breakfast":
        return "Hotel";
      case "Casino":
        return "Hotel";
      case "Hospital":
        return "Independent Care Home";
      case "Senior Care":
        return "Independent Care Home";
      case "Doctor's Office":
        return "Independent Care Home";
      case "Outpatient Facility":
        return "Independent Care Home";
      case "Business Service Contractors/Contract Cleaners":
        return "Contract Cleaning";
      case "General Office Building":
        return "Office";
      case "Retail":
        return "Retail";
      case "Hair/Beauty":
        return "Hair/Beauty Salon";
      case "Other":
        return "Other";

    }
  };

  businessSizeMapping = value => {
    switch (value) {
      case "1-4":
        return "Small";
      case "5-9":
        return "Medium";
      case "10-14":
        return "Large";
      case "15-19":
        return "Large";
      case "20+":
        return "Large";
      case "Less than 5":
        return "Small";
      case "5-10":
        return "Medium";
      case "10+":
        return "Large";
    };
  };

  setResult = (id) => {
    const { currentQuestionIndex, answersChosen, subAnswerChosen, buttonIndex } = this.state;
    const { setNoProductModalFlag } = this.props

    let BT = answersChosen[0];
    let SBT = subAnswerChosen;
    let BS = answersChosen[1];
    let PA = answersChosen[4];
    console.log("***PA****",PA);
    var data = [];

    const result1 = ProductRecommendationData.filter((x) =>
      x.BusinessTypes.map((a) => {

        if (subAnswerChosen) {
          if (a.Type == this.businessTypeMapping(SBT, a.Type)) {
            a.BusinessSize.filter((b) => {
              if (
                b.SizeValue === this.businessSizeMapping(BS) &&
                PA.includes(b.PrimaryArea)
              ) {
                const product = new Object()
                product.ProductBrand = x.ProductBrand
                product.ProductName = x.ProductName
                product.Sku = x.SKU
                product.SizeData = b.Size
                product.DescriptionData = b.Description
                product.ImageUrl = b.ProductImageUrl
                product.Disclaimer = b.ProductDisclaimer
                product.Superiority = b.ProductSuperiority
                product.BulletProductDescriptionData = b.BulletProductDescription
                product.BulletProductSuperiorityData = b.BulletProductSuperiority
                product.PrimaryArea = PA
                product.Tensions = x.Tensions
                product.Core = x.CoreAncillary
                product.SDSurls = x.SDSurls
                data.push(product)
              };
            });
          };

        } else {

          if (a.Type == this.businessTypeMapping(BT, a.Type)) {
            a.BusinessSize.filter((b) => {
              if (
                b.SizeValue === this.businessSizeMapping(BS) &&
                PA.includes(b.PrimaryArea)
              ) {
                const product = new Object()
                product.ProductBrand = x.ProductBrand
                product.ProductName = x.ProductName
                product.Sku = x.SKU
                product.SizeData = b.Size
                product.DescriptionData = b.Description
                product.ImageUrl = b.ProductImageUrl
                product.Disclaimer = b.ProductDisclaimer
                product.Superiority = b.ProductSuperiority
                product.BulletProductDescriptionData = b.BulletProductDescription
                product.BulletProductSuperiorityData = b.BulletProductSuperiority
                product.PrimaryArea = PA
                product.Tensions = x.Tensions
                product.Core = x.CoreAncillary
                product.SDSurls = x.SDSurls
                data.push(product)
              };
            });
          };
        }
      })
    );

    if (data.length === 0) {
      setNoProductModalFlag(true)

    } else if (id == 'qPrimaryAreas') {
      this.setState({ buttonIndex: buttonIndex + 1, currentQuestionIndex: currentQuestionIndex + 1 })
    } else {

      console.log("^^^^", data);
      localStorage.setItem('recommendedResults', JSON.stringify(data));
      this.props.setProductResult(data)
      this.props.setAnswersChosen(answersChosen);
      localStorage.setItem('answerChosen',JSON.stringify(answersChosen));
      this.props.setSubAnswerChosen(subAnswerChosen)
      this.setState({
        // productResult: data,
        currentQuestionIndex: currentQuestionIndex + 1,
      });
    }
  };

  nextQuestionLogic = (index, id) => {
    const {
      currentQuestionIndex,
      answerChosen,
      SubAnswers,
      answersChosen,
      buttonIndex,
      subAnswerChosen,
      SubAnswersIndex,
      SubSubAnswers,
      hasToggleQuestion,
      Background
    } = this.state;
    
    this.setState({ hasSubQuestion: false, currentselection: "" });
    this.setState({ hasSubSubQuestion: false });
    this.setState({
      buttonIndex: buttonIndex + 1
    });
    const { setNoProductModalFlag } = this.props;

    //dataLayer.push({'event': answersChosen[index]})

    if (id == 'qLocations') {
      switch (answersChosen[0]) {
        case "Restaurants":
          if (this.state.AnswerQuesLoc > 1) {
            this.setState({ showModal: true });
            return
          } else this.setState({ showModal: false });
          break;
        case "Hospitality":
          if (this.state.AnswerQuesLoc > 1) {
            this.setState({ showModal: true });
            return
          } else this.setState({ showModal: false });
          break;
        case "Independent Care Home":
          if (this.state.AnswerQuesLoc > 1) {
            this.setState({ showModal: true });
            return
          } else this.setState({ showModal: false });
          break;
        case "Coffee Shop/Cafe/Bar":
          if (this.state.AnswerQuesLoc > 1) {
            this.setState({ showModal: true });
            return
          }
          else this.setState({ showModal: false });
          break;
        case "General Office Building":
          if (this.state.AnswerQuesLoc > 1) {
            this.setState({ showModal: true });
            return
          } else this.setState({ showModal: false });
          break;
        case "Other":
          if (this.state.AnswerQuesLoc > 1) {
            this.setState({ showModal: true });
            return
          } else this.setState({ showModal: false });
          break;
        case "Business Service Contractors/Contract Cleaners":
          if (this.state.AnswerQuesLoc > 1) {
            this.setState({ showModal: true })
            return
          }
          else this.setState({ showModal: false })
          break;
        default:
          if (this.state.AnswerQuesLoc > 4) {
            console.log("MODAL: ON");
            this.setState({ showModal: true });
            return
          } else this.setState({ showModal: false });
      }
    }

    // SETTING the TOGGLE QUESTIONS to FALSE when in we are finished with the TOGGLING Question
    if (id == "qLocations") {
      this.setState({ hasToggleQuestion: false })
    }

    // SETTING the PRIMARY AREA ANSWERS AOT==== START
    if (id == "qTypeCleaner") {
      let primaryAreasList = [];
      const result1 = ProductRecommendationData.filter(x =>
        x.BusinessTypes.map(a => {
          if (subAnswerChosen) {
            if (a.Type == this.businessTypeMapping(subAnswerChosen, a.Type)) {
              a.BusinessSize.map(b => {
                primaryAreasList.push(b.PrimaryArea);
              });
            }
          }
          else
            if (a.Type == this.businessTypeMapping(answersChosen[0], a.Type)) {
              console.log(a.BusinessSize)
              a.BusinessSize.map(b => {
                primaryAreasList.push(b.PrimaryArea);
              });
            }
        })
      );

      let temp = answersChosen;
      let uniquePrimaryList = [...new Set(primaryAreasList)];
      // console.log("uniquePrimaryList", uniquePrimaryList);
      if (!temp[currentQuestionIndex + 1]) {
        temp.push(uniquePrimaryList);
      }
      this.setState({
        [answersChosen[currentQuestionIndex + 1]]: [...answersChosen, temp],
        primaryAreasDefaultAnswers: [...new Set(primaryAreasList)],
        primaryAreasList: true,
        filteredPrimaryAreasList: primaryAreasList,
      });
    }
    // SETTING the PRIMARY AREA ANSWERS AOT==== END

    // **** LOGIC FOR QUESTION FLOW *****
    // 1. Check if the current selection has SubQuestion
    // 2. Check if the current selection has SubSubQuestion
    // 3. Check if the current selection falls under Toggling Question Scenario

    if (id == "qBusinessType") {

      const status = QuestionsData.Data.Questions[currentQuestionIndex].Answers.map(a => a.Status)

      if (status[answerChosen] === "Disabled") {
        setNoProductModalFlag(true)
      } else {

        if (!SubAnswers)
         {

          if (!hasToggleQuestion) {

            if (
              QuestionsData.Data.Questions[currentQuestionIndex].Answers[
                this.state.AnswerBType
              ].hasOwnProperty("SubQuestion")
            ) {
              this.setState({ hasSubQuestion: true });
            }
            else {
              this.handlingTogglingQuestion() //Handles the scenario to check
              this.setState({ currentQuestionIndex: currentQuestionIndex + 1 });
            }
          }

        }
        else {
          if (!SubSubAnswers) {
            if (!hasToggleQuestion) {
              if (SubAnswers.hasOwnProperty("SubSubQuestion")) {
                this.setState({ hasSubSubQuestion: true });
              }
              else {
                
                if (SubAnswers && this.state.inBackTrack) 
                { //Check if we are in BackTrack and subanswers is already selected
                  this.setState({ hasSubQuestion: true, inBackTrack: false });
                }
                else 
                {
                  console.log("nob")
                  console.log("subans:",SubAnswers)
                  if(SubAnswers.SubAnswer === "Not a business")
                  {
                    answersChosen[1] = '1-4'
                    this.setState({currentQuestionIndex: currentQuestionIndex+2, answersChosen: answersChosen});
                  }
                  else
                  {
                    this.handlingTogglingQuestion()
                    this.setState({ currentQuestionIndex: currentQuestionIndex + 1 });
                  }
                }
              }
            }
            else {
              this.setState({ currentQuestionIndex: currentQuestionIndex + 1 });
            }
          } else {

            if (!hasToggleQuestion) {
              if (this.state.hasSubQuestion === false) {
                if (this.state.hasSubSubQuestion === false) {
                  this.setState({ hasSubQuestion: true, inBackTrack: false });
                }
                else {
                  this.setState({ hasSubSubQuestion: false, inBackTrack: false });
                  this.handlingTogglingQuestion()
                  this.setState({ currentQuestionIndex: currentQuestionIndex + 1 });
                }
              }
              else {
                if (SubAnswers.hasOwnProperty("SubSubQuestion")) // Checks if a SubQuestion has a subsubQuestion (Also handles Back Track)
                {
                  this.setState({ hasSubQuestion: false, hasSubSubQuestion: true, inBackTrack: false });
                }
                else {
                  this.setState({ hasSubQuestion: false, inBackTrack: false });
                  this.handlingTogglingQuestion()
                  this.setState({ currentQuestionIndex: currentQuestionIndex + 1 });
                }

              }


            } else {
              this.setState({ currentQuestionIndex: currentQuestionIndex + 1 });
            }
          }
        }
      }
    }

    else this.setState({ currentQuestionIndex: currentQuestionIndex + 1 });

    window.scrollTo(0, 0);
  };

  // Function to handle when we have a scenario for TOGGLE Question
  handlingTogglingQuestion = () => {
    const {
      currentQuestionIndex,
      answersChosen,
    } = this.state;
    if (QuestionsData.Data.Questions[currentQuestionIndex + 1].hasOwnProperty("ToggleQuestions")) {
      let q2 = ""
      let a2 = []
      let fm2 = ""
      if (answersChosen[0] == "Business Service Contractors/Contract Cleaners") {
        q2 = QuestionsData.Data.Questions[currentQuestionIndex + 1].ToggleQuestions[1].Question
        a2 = QuestionsData.Data.Questions[currentQuestionIndex + 1].ToggleQuestions[1].Answers
        fm2 = QuestionsData.Data.Questions[currentQuestionIndex + 1].ToggleQuestions[1].FriendlyMessage
      }
      else {
        q2 = QuestionsData.Data.Questions[currentQuestionIndex + 1].ToggleQuestions[0].Question
        a2 = QuestionsData.Data.Questions[currentQuestionIndex + 1].ToggleQuestions[0].Answers
        fm2 = QuestionsData.Data.Questions[currentQuestionIndex + 1].ToggleQuestions[0].FriendlyMessage

      }
      this.setState({ toggleQuestion2: q2, toggleAnswer2: a2, FriendlyMessage2: fm2, hasToggleQuestion: true })
    }
  };

  backQuestionLogic = (index, id) => {
    const {
      currentQuestionIndex,
      answersChosen,
      SubAnswers,
      SubSubAnswers,
      hasSubQuestion,
      hasSubSubQuestion,
      subAnswerChosen,
      SubAnswersIndex,
      buttonIndex,
      SubSubAnswerChosen
    } = this.state;
    this.setState({ buttonIndex: buttonIndex - 1 });
    // this.setState({inBackTrack:true})
    console.log("id",id);
    if (id == "qBusinessType") {
      if (hasSubQuestion === false) {
        if (hasSubSubQuestion === false) {
          this.setState({ currentQuestionIndex: currentQuestionIndex, inBackTrack: false });
        }
        else {
          //if (SubAnswers.hasOwnProperty("SubQuestion")) {
          this.setState({ hasSubSubQuestion: false, hasSubQuestion: true, inBackTrack: true });
          //}
        }
      }
      else {
        this.setState({ hasSubQuestion: false, inBackTrack: true });
      }
    }
    else if (id == "qFamiliarity") {
      if (this.state.toggleQuestion2) {
        this.setState({ hasToggleQuestion: true, currentQuestionIndex: currentQuestionIndex - 1 })
      }
    }
    else if (id == "qLocations") {
      if (SubAnswers) {
        if (SubSubAnswers) {
          this.setState({ hasSubSubQuestion: true });
        } else {
          this.setState({ hasSubQuestion: true });
        }
      }
      this.setState({ hasToggleQuestion: false, currentQuestionIndex: currentQuestionIndex - 1 });
    } 
    else if(id== "qImportant")
    {
      if(SubAnswers.SubAnswer == "Not a business")
      {
        this.setState({currentQuestionIndex:currentQuestionIndex-2});
      }
      else
      {
        this.setState({hasToggleQuestion:true, currentQuestionIndex:currentQuestionIndex-1});
      }
    }
    else {

      this.setState({
        currentQuestionIndex: currentQuestionIndex - 1,
        // SubAnswers: "",
        // SubSubAnswers: "",
        // SubAnswerChosen: ""
      });
    }
    // if(id!="qBusinessType"){
    //   let temp= answersChosen
    //   temp.splice(currentQuestionIndex,1)
    //   console.log("After Back",temp)
    // }

    if (id === 'qBusinessType' && hasSubQuestion === false && hasSubSubQuestion === false) {
      window.location.href = process.env.NEXT_PUBLIC_BASE_URL
    }

    // let temp= answersChosen
    //   temp.splice(currentQuestionIndex,1)
    //   console.log("After Back",temp)
  };

  restartQuiz = () => {
    // window.parent.location = window.parent.location.href;
    if(this.state.answersChosen[0]== "Business Service Contractors/Contract Cleaners")
    {
      this.state.answersChosen[1] = '5-10';
    }
    else
    {
      this.state.answersChosen[1] = '5-9';
    }
    this.setState({
      hasToggleQuestion:false,
      currentQuestionIndex: this.state.currentQuestionIndex+1,
      // SubAnswers: "",
      // SubSubAnswers: "",
      // subAnswerChosen: "",
      // answersChosen: [],
      answersChosen: this.state.answersChosen 
         
    });
    this.nextQuestionLogic(this.currentQuestionIndex,"qLocations");
    console.log("restartQuiz section----");
    console.log(' mY answersChosen',this.state.answersChosen)
    console.log("currentQuestionIndex--",this.state.currentQuestionIndex)
    
  };
  render() {
    const {
      currentQuestionIndex,
      answersChosen,
      currentselection,
      recommendations,
      primaryAreasDefaultAnswers,
      answerChosen,
      hasSubQuestion,
      SubAnswers,
      hasSubSubQuestion,
      buttonIndex,
      SubAnswersIndex,
      SubSubAnswers,
      subAnswerChosen,
      hasToggleQuestion,
      toggleAnswer2,
      toggleQuestion2,
      sublevel
    } = this.state;

    console.log("Answers:", answersChosen);
    console.log("Choosen SubAnswer:", subAnswerChosen);
    console.log("Choosen SubSubAnswer:", SubSubAnswers);
    console.log("Choosen SubAnswer:", SubAnswers);
    console.log("hasSubQuestion:", hasSubQuestion);
    console.log("hasSubSubQuestion:", hasSubSubQuestion);

    console.log("=====================!!!!!!!!!!!====================");
    console.log("toggleAnswer2",toggleAnswer2)
    console.log("primaryAREASlist:---",this.state.currentQuestionIndex <=
    this.state.answersChosen.length+1)
    console.log('working')
    
    return (
      <div className={currentQuestionIndex < QuestionsData.Data.Questions.length ? "imgBackground" : ""}>
        <Header />

        <Progress data={this.state.currentQuestionIndex} SubSubAnswers={this.state.SubSubAnswers} SubAnswers={this.state.SubAnswers} buttonIndex={this.state.buttonIndex} />

        <NoProductModal />

        <Modal centered show={this.state.showModal} onClick={() => this.setState({ showModal: false })} onHide={() => this.setState({ showModal: false })}>
          <Modal.Header closeButton className="modal-header"></Modal.Header>
          <Modal.Body className="modalBody">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <img src={ImageReferenceData.WordBubblesImage} alt="WordBubbles" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mt-3">
                  It looks like you are purchasing for a large business. The PGP Smart Assist is build for small and medium businesses, so for your large business please request a personal consultation, or select fewer locations.
              </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="modal-footer text-center">
            <div className="container">
              <div >
                <a target="_blank" href="https://pgpro.com/en-us/request-consultation"><button className="contactButton" rel="noopener">Contact Us</button></a>
              </div>
              <div className="mt-2">
                <button className="backButton" onClick={() => this.restartQuiz()}>Continue SmartAssist</button>
              </div>
            </div>
          </Modal.Footer>
        </Modal>


        <div>
          {QuestionsData.Data.Questions.map(q => {

            if (q.index === currentQuestionIndex)
             {
            console.log(q)

            console.log("q.index--", q.index, "cureentqIndex_--",currentQuestionIndex, "qid", q.id);
            
              return (
                <div className="container" key={q.index}>

                  <QuestionIcon questionId={q.id} questionIcon={hasSubQuestion || hasSubSubQuestion ? (sublevel.Icon) : (q.Icon)} />
  
                  <Question
                    questionText={
                      hasSubSubQuestion ? (
                        SubAnswers.SubSubQuestion
                      ) : hasSubQuestion ? (
                        sublevel.SubQuestion
                      ) : hasToggleQuestion ? toggleQuestion2 : (
                        q.Question
                      )
                    }
                  />

                  {q.hasOwnProperty("SubText") ? <div className="row">
                    <div className="col-md-12 p-3 subQuestionText">{q.SubText}</div>
                  </div> : null}

                  <div className={q.id === "qTypeCleaner" ? "buttonContainerTypeCleaner animated animatedFadeInUp fadeInUp" : "buttonContainer animated animatedFadeInUp fadeInUp"}>
                    {hasSubSubQuestion ? (
                      SubAnswers.SubSubAnswer.map((a, i) => {
                        return (
                          <div
                            key={i}
                            onClick={() =>
                              q.Type == "multiSelect"
                                ? this.selectMulti(a, q.index)
                                :
                                this.setState({
                                  SubSubAnswers: a,
                                  currentselection: a,
                                  // buttonIndex: buttonIndex + .3
                                  buttonIndex: 3.9
                                })
                            }
                          >
                            <Button

                              answer={a}
                              questionId={q.id}
                              isSelected={
                                a === this.state.SubSubAnswers ? true : false
                              }
                            />
                          </div>
                        );
                      })
                    ) : !hasSubQuestion ? q.id == 'qPrimaryAreas' ? (
                      primaryAreasDefaultAnswers.map((a, i) => {
                        return (
                          <div
                            key={i}
                            onClick={() =>
                              this.selectButton(a, q.index, q.Type, i, q.id)}
                          >
                            <Button
                              answer={a}
                              questionId={q.id}
                              isSelected={
                                q.Type == "multiSelect" &&
                                  this.state.answersChosen[
                                  currentQuestionIndex
                                  ] != undefined ? this.state.answersChosen[
                                    currentQuestionIndex
                                  ].includes(a) ? (
                                      true
                                    ) : (
                                      false
                                    ) : a ==
                                      this.state.answersChosen[
                                      currentQuestionIndex
                                      ] ? (
                                      true
                                    ) : (
                                      false
                                    )
                              }
                              type={q.Type}
                            />
                          </div>
                        );
                      })
                    ) :
                      hasToggleQuestion ?
                        toggleAnswer2.map((a, i) => {
                          return (
                            <div
                              key={i}
                              onClick={() =>
                                this.selectButton(a.Answer, q.index, q.Type, i, q.id)}
                            >
                              <Button
                                answer={a.Answer}
                                questionId={q.id}
                                isSelected={
                                  q.Type == "multiSelect" &&
                                    this.state.answersChosen[
                                    currentQuestionIndex
                                    ] != undefined ? this.state.answersChosen[
                                      currentQuestionIndex
                                    ].includes(a.Answer) ? (
                                        true
                                      ) : (
                                        false
                                      ) : a.Answer ==
                                        this.state.answersChosen[
                                        currentQuestionIndex
                                        ] ? (true) : (false)}
                                type={q.Type}
                              />
                            </div>
                          );
                        })
                        :

                        (
                          q.Answers.map((a, i) => {
                            return (
                              <div
                                key={i}
                                onClick={() =>
                                  this.selectButton(a.Answer, q.index, q.Type, i, q.id, a)} >

                                <Button
                                  answer={a.Answer}
                                  questionId={q.id}
                                  isSelected={q.Type == "multiSelect" && this.state.answersChosen[currentQuestionIndex] != undefined ? this.state.answersChosen[currentQuestionIndex].includes(a.Answer) ? (true) : (false) : a.Answer == this.state.answersChosen[currentQuestionIndex] ? (true) : (false)}
                                  type={q.Type}
                                />
                              </div>
                            );
                          })
                        ) : (
                          sublevel.SubAnswers.map((a, i) => {
                            return (
                              <div
                                key={i}
                                onClick={() =>
                                  q.Type == "multiSelect"
                                    ? this.selectMulti(a, q.index)
                                    : this.selectButtonSubAnswer(a, i, a.SubAnswer, buttonIndex)}
                              >
                                <Button
                                  answer={a.SubAnswer}
                                  questionId={q.id}
                                  isSelected={a.SubAnswer == this.state.subAnswerChosen ? (true) : (false)}
                                />
                              </div>
                            );
                          })
                        )}
                  </div>

                  <div className="stickyContainer">
                    <div className="container">
                      {(q.id === "qPrimaryAreas" && q.Type == "multiSelect") || currentselection ? (
                        <AnswerSelection
                          answerSelections={this.state.currentselection}
                          answers={q}
                          message={this.getMessage(
                            this.state.currentQuestionIndex,
                            this.state.currentselection,
                            q.id
                          )}
                          primaryArea={q.id}
                          multiSelect={q.Type}
                          filteredPrimaryAreasList={this.state.filteredPrimaryAreasList}
                          answersChosen={answersChosen[currentQuestionIndex]}
                          type="singleSelect"
                          answerShowandHide={this.state.answerDisplayAndHide}
                        />
                      ) : null}
                    </div>

                    <div className="nextBackBtnContainer">

                      {q.id === 'qTensions' ?

                        <Link href='/PGPro-SmartAssist-Recommendations'>
                          <button onClick={() => this.setResult(q.id)}
                            disabled={q.id === 'qImportant' && this.state.answersChosen[currentQuestionIndex] != undefined ? this.state.answersChosen[currentQuestionIndex].length === 0 ? (true) : (false)
                              : q.id === 'qPrimaryAreas' ? answersChosen && answersChosen[currentQuestionIndex].length == 0 && this.state.primaryAreasList === true
                                : q.Type == "multiSelect" && q.id === 'qTensions' && this.state.answersChosen[currentQuestionIndex] != undefined ? this.state.answersChosen[currentQuestionIndex].length === 0 ? (true) : (false)
                                  : this.state.hasSubQuestion === true && this.state.subAnswerChosen === "" ? true
                                    : this.state.hasSubSubQuestion === true && this.state.SubSubAnswers === "" ? true
                                      : (this.state.currentQuestionIndex >= this.state.answersChosen.length || buttonIndex === 10)}
                            className={
                              q.id !== 'qImportant' ? q.id !== 'qPrimaryAreas' ? q.id !== 'qTensions'
                                ? this.state.hasSubQuestion === true && this.state.subAnswerChosen === "" ? ("nextButtonDisable mt-3") :
                                  this.state.hasSubSubQuestion === true && this.state.SubSubAnswers.length === 0 ? ("nextButtonDisable mt-3") :
                                    this.state.answersChosen[this.state.currentQuestionIndex] ? (
                                      "nextButton mt-3 pop-on-hover event_button_click"
                                    ) : (
                                        "nextButtonDisable mt-3"
                                      ) : answersChosen[currentQuestionIndex] &&
                                        answersChosen[currentQuestionIndex].length > 0 && this.state.viewMyRecommendationButton === true ? (
                                    "nextButton mt-3 pop-on-hover event_button_click"
                                  ) : (
                                    "nextButtonDisable mt-3"
                                  ) : answersChosen[currentQuestionIndex] &&
                                    answersChosen[currentQuestionIndex].length === 0 && this.state.primaryAreasList === true ? (
                                    "nextButtonDisable mt-3"
                                  ) : (
                                    "nextButton mt-3 pop-on-hover event_button_click"
                                  ) : answersChosen[currentQuestionIndex] &&
                                    answersChosen[currentQuestionIndex].length > 0 && this.state.importantList === true ? (
                                    "nextButton mt-3 pop-on-hover event_button_click"
                                  ) : (
                                    "nextButtonDisable mt-3"
                                  )
                            }
                            data-action-detail="recommendations-button">
                            View My Recommendations
                            </button>
                        </Link>
                        :
                        <button
                          disabled={q.id === 'qImportant' && this.state.answersChosen[currentQuestionIndex] != undefined ? this.state.answersChosen[currentQuestionIndex].length === 0 ? (true) : (false)
                            : q.id === 'qPrimaryAreas' ? answersChosen && answersChosen[currentQuestionIndex].length == 0 && this.state.primaryAreasList === true
                              : q.Type == "multiSelect" && q.id === 'qTensions' && this.state.answersChosen[currentQuestionIndex] != undefined ? this.state.answersChosen[currentQuestionIndex].length === 0 ? (true) : (false)
                                : this.state.hasSubQuestion === true && this.state.subAnswerChosen === "" ? true
                                  : this.state.hasSubSubQuestion === true && this.state.SubSubAnswers === "" ? true
                                    : (this.state.currentQuestionIndex >= this.state.answersChosen.length || buttonIndex === 10)}
                          onClick={() => { q.id === 'qPrimaryAreas' ? this.setResult(q.id) : this.nextQuestionLogic(currentQuestionIndex, q.id) }}
                          className={
                            q.id !== 'qImportant' ? q.id !== 'qPrimaryAreas' ? q.id !== 'qTensions'
                              ? this.state.hasSubQuestion === true && this.state.subAnswerChosen === "" ? ("nextButtonDisable mt-3") :
                                this.state.hasSubSubQuestion === true && this.state.SubSubAnswers.length === 0 ? ("nextButtonDisable mt-3") :
                                  this.state.answersChosen[this.state.currentQuestionIndex] ? (
                                    "nextButton mt-3 pop-on-hover event_button_click"
                                  ) : (
                                      "nextButtonDisable mt-3"
                                    ) : answersChosen[currentQuestionIndex] &&
                                      answersChosen[currentQuestionIndex].length > 0 && this.state.viewMyRecommendationButton === true ? (
                                  "nextButton mt-3 pop-on-hover event_button_click"
                                ) : (
                                  "nextButtonDisable mt-3"
                                ) : answersChosen[currentQuestionIndex] &&
                                  answersChosen[currentQuestionIndex].length === 0 && this.state.primaryAreasList === true ? (
                                  "nextButtonDisable mt-3"
                                ) : (
                                  "nextButton mt-3 pop-on-hover event_button_click"
                                ) : answersChosen[currentQuestionIndex] &&
                                  answersChosen[currentQuestionIndex].length > 0 && this.state.importantList === true ? (
                                  "nextButton mt-3 pop-on-hover event_button_click"
                                ) : (
                                  "nextButtonDisable mt-3"
                                )
                          }
                          data-action-detail={answersChosen[currentQuestionIndex]} >Next</button>
                      }

                      <button
                        onClick={() => this.backQuestionLogic(currentQuestionIndex, q.id)}
                        className="backButton pop-on-hover event_button_click" data-action-detail="back-button">Back</button>
                    </div>
                  </div>
                </div>
              );
            }
          })
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ nextPageReducer }) => ({
  productResult: nextPageReducer.productResult,
  answersChosen: nextPageReducer.answerChosen,
  subAnswerChosen: nextPageReducer.subAnswerChosen,

})

export default connect(
  mapStateToProps,
  {
    setProductResult,
    setAnswersChosen,
    setSubAnswerChosen,
    setNoProductModalFlag,
  })(Questions)