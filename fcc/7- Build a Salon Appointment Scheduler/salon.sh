#!/bin/bash

PSQL="psql -X --username=freecodecamp --dbname=salon --tuples-only -c"

MAIN_MENU(){
  if [[ $1 ]]
  then echo -e "\n$1\n"
  fi
  echo -e "\nWelcome to Tony teacher's, what can i do for you?\n"
  
  echo "$($PSQL "SELECT * FROM services;")" | while read SERVICE_ID   BAR SERVICE_NAME
  do
    echo "$SERVICE_ID) $SERVICE_NAME"
  done
  
  read SERVICE_ID_DO

  if [[ ! $SERVICE_ID_DO =~ ^[0-9]+$ ]]
  then MAIN_MENU "Use service number to pick one"

  else
    SERVICE=$($PSQL "SELECT name FROM services WHERE service_id =   '$SERVICE_ID_DO'")
    echo $SERVICE
  
    if [[ -z $SERVICE ]]
    then MAIN_MENU "we don't get that one, which service you want?"

    
      # picked the service
    fi
  fi
  }
  
  
MAIN_MENU