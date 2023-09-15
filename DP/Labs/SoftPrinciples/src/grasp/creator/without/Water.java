package grasp.creator.without;

public class Water {
    boolean isTransparent;
    public Water(boolean isTransparent){
        this.isTransparent = isTransparent;
    }

    public String useWater(){
        return "Water as " + (isTransparent ? "Clean" : "Dirty");
    }
}
