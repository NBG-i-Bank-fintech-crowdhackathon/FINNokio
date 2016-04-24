jQuery("#simulation")
  .on("click", ".s-e64ea595-a304-4871-ab78-fbc570c376de .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Image_2",
                    "top": {
                      "type": "movetoposition",
                      "value": "203"
                    },
                    "left": {
                      "type": "movebyoffset",
                      "value": "600"
                    },
                    "containment": true,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 50
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Image_2",
                    "top": {
                      "type": "movetoposition",
                      "value": "203"
                    },
                    "left": {
                      "type": "movebyoffset",
                      "value": "-600"
                    },
                    "containment": true,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 50
                    }
                  },
                  "exectype": "timed",
                  "delay": 50
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Image_2",
                    "top": {
                      "type": "movetoposition",
                      "value": "203"
                    },
                    "left": {
                      "type": "movebyoffset",
                      "value": "600"
                    },
                    "containment": true,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "timed",
                  "delay": 50
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Image_2",
                    "top": {
                      "type": "movetoposition",
                      "value": "203"
                    },
                    "left": {
                      "type": "movebyoffset",
                      "value": "-600"
                    },
                    "containment": true,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 50
                    }
                  },
                  "exectype": "timed",
                  "delay": 50
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Image_2",
                    "top": {
                      "type": "movetoposition",
                      "value": "203"
                    },
                    "left": {
                      "type": "movebyoffset",
                      "value": "600"
                    },
                    "containment": true,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 50
                    }
                  },
                  "exectype": "timed",
                  "delay": 50
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Image_3",
                    "effect": {
                      "type": "puff",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Image_6",
                    "effect": {
                      "type": "puff",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Image_5",
                    "effect": {
                      "type": "puff",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "timed",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Button_2"
                  },
                  "exectype": "timed",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Button_1"
                  },
                  "exectype": "timed",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Button_7"
                  },
                  "exectype": "timed",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/dffb2588-b85c-4b14-a645-6ec29632360a"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e9b3c36c-ac87-4132-8cfa-cb56c98df8cf"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/41e79997-3473-4377-a244-5dedb9c408e3"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4c588966-23f3-4159-82b3-acec889532ce"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-e64ea595-a304-4871-ab78-fbc570c376de .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Button_1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Button_2"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Image_3"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Image_5"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Image_6"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Button_7"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });