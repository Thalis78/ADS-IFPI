package AtvExtraQUESTAO07;

public class ControleAudio {
    int volume  = 2;

    int aumentarVolume(){
        if(this.volume >= 10){
            this.volume = 10;
        }else{
            this.volume++;
        }

        return this.volume;
    }

    int diminuirVolume(){
        if(this.volume <= 0){
            this.volume = 0;
        }else{
            this.volume--;
        }

        return this.volume;
    }

    int lerVolume(){
        return this.volume;
    }
}
