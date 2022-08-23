const getSleepHours = (day) => {
    day = day.toLowerCase();
    switch (day){
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 5;
        break;
      case 'wednesday':
        return 7;
        break;
      case 'thursday':
        return 4;
        break;
      case 'friday':
        return 7;
        break;
      case 'saturday':
        return 8;
        break;
      case 'sunday':
        return 4;
        break;
      default:
        return 'ERROR: INVALID INPUT';
        break;
    }
  }
  
  const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  }
  
  const getIdealSleepHours = () => {
    var idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    var actualSleepHours = getActualSleepHours();
    var idealSleepHours = getIdealSleepHours();
    var sleepDebt;
  
    if (actualSleepHours == idealSleepHours){
      console.log("You got the perfect amount of sleep this week. Congrats!");
    } else if (actualSleepHours > idealSleepHours){
      sleepDebt = actualSleepHours - idealSleepHours;
      console.log(`You're sleeping about ${sleepDebt} more hours than you should. Try to wake up earlier or go to sleep later.`);
    } else if (actualSleepHours < idealSleepHours){
      sleepDebt = idealSleepHours - actualSleepHours;
      console.log(`You're sleeping ${sleepDebt} hours less than you should be. Try to get some rest!`);
    }
  }
  
  calculateSleepDebt();
  
  
  
  
  