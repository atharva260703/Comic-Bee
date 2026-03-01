use wasm_bindgen::prelude::*;
#[wasm_bindgen]
pub fn process_views(views: i32) -> i32 {
    views * 2
}
